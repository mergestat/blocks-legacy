import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Checkbox, CHECKBOX_STATES } from '../Form/Checkbox';

type TableProps = {
  dataSource: Array<any>;
  columns: Array<{
    title?: string;
    headerClassName?: string;
    dataIndex?: any;
    className?: string;
    key?: any;
    render?: React.ReactNode | any | undefined;
  }>;
  className?: string;
  tableWrapperClassName?: string;
  responsive?: boolean;
  emptyText?: string | React.ReactNode;
  hovered?: boolean;
  rowKey?: any;
  loading?: boolean;
  scrollY?: string | number;
  noWrapHeaders?: boolean;
  borderless?: boolean;
  tableHeaderBackground?: string;
  tableBodyBackground?: string;
  checkable?: boolean;
  hasSelectAll?: boolean;
  onSelectedChange?: (selectedRows: Array<any>) => void;
  sortable?: boolean;
  collapsible?: boolean;
};

export const Table: React.FC<TableProps> = ({
  className,
  dataSource,
  columns,
  emptyText,
  hovered = false,
  responsive = false,
  loading = false,
  borderless = false,
  noWrapHeaders = false,
  scrollY,
  tableWrapperClassName,
  tableHeaderBackground = 'white',
  tableBodyBackground = 'white',
  checkable = false,
  hasSelectAll = true,
  onSelectedChange = () => {},
  sortable = false,
  collapsible = false,
}) => {
  if (loading) {
    return (
      <div
        className="overflow-hidden bg-white"
        style={{ maxHeight: scrollY || 'unset' }}
      >
        <SkeletonLoaderTable
          colLen={columns.length}
          rowLen={dataSource.length}
          borderless={borderless}
        />
      </div>
    );
  }

  // Checkable module
  const [data, setData] = useState(
    dataSource.map((data) => ({
      ...data,
      checked: false,
    }))
  );

  const checkedState = () => {
    const checkedDataLen: number = data.filter((d) => d.checked).length;

    return checkedDataLen === 0
      ? CHECKBOX_STATES.Unchecked
      : checkedDataLen === data.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate;
  };

  const onRowChange = (checked: boolean, index: number) => {
    data[index].checked = checked;
    setData([...data]);
    onSelectedChange(data.filter((d) => d.checked));
  };

  // Sortable module
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setData(sorted);
    }
  };

  // Collapsible module
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (rowId: number) => {
    const currentExpandedRows = expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter((id) => id !== rowId)
      : currentExpandedRows.concat(rowId);

    setExpandedRows(newExpandedRows);
  };

  return dataSource.length < 1 ? (
    <div
      className={cx('flex justify-center items-center bg-white py-5', {
        'rounded-md border-gray-200 border': !borderless,
      })}
    >
      {emptyText ?? 'No data available!'}
    </div>
  ) : (
    <div
      className={cx('overflow-hidden bg-white relative', {
        'overflow-x-auto': responsive,
        'overflow-y-auto': !!scrollY,
        'border border-gray-200 rounded': !borderless,
        [tableWrapperClassName]: !!tableWrapperClassName,
      })}
      style={{ maxHeight: scrollY || 'unset' }}
    >
      <table
        className={cx(`t-table-default`, {
          [`t-table-hover`]: hovered,
          [`t-table-sticky-header`]: !!scrollY,
          [className]: !!className,
        })}
      >
        <thead>
          <tr className={cx(`bg-${tableHeaderBackground}`)}>
            {checkable && (
              <th className="w-0 pl-6">
                {hasSelectAll && (
                  <Checkbox
                    value={checkedState()}
                    onChange={(e) => {
                      const checked = e.currentTarget.checked;

                      setData([
                        ...data.map((item) => ({
                          ...item,
                          checked: checked,
                        })),
                      ]);

                      onSelectedChange(checked ? data : []);
                    }}
                  />
                )}
              </th>
            )}
            {collapsible && <th className="w-0 pl-6"></th>}
            {columns.map(({ title, key, headerClassName }) => {
              const cl = sortable
                ? sortField && sortField === key && order === 'asc'
                  ? 'up'
                  : sortField && sortField === key && order === 'desc'
                  ? 'down'
                  : 'default'
                : '';
              return (
                <th
                  scope="col"
                  key={key}
                  className={cx(
                    {
                      'whitespace-nowrap': noWrapHeaders,
                      'px-6': title && typeof title === 'string',
                      [headerClassName]: !!headerClassName,
                    },
                    `${cl}`
                  )}
                  onClick={sortable ? () => handleSortingChange(key) : null}
                >
                  {title}{' '}
                  {sortable ? (
                    <div className="sortable__th__arrow-wrapper">
                      <div className="sortable__th__arrow sortable__th__arrowup"></div>
                      <div className="sortable__th__arrow sortable__th__arrowdown"></div>
                    </div>
                  ) : (
                    ''
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={cx(`bg-${tableBodyBackground}`)}>
          {data.map((d, index) => {
            const rowKey = d.id || Math.random();
            const itemRows = [];

            if (expandedRows.includes(index)) {
              itemRows.push(
                <tr key={'row-expanded-' + index}>
                  <td colSpan={3}>{d.exp_data}</td>
                </tr>
              );
            }

            return (
              <>
                <tr key={rowKey} onClick={() => handleRowClick(index)}>
                  {checkable && (
                    <td className="w-0 pl-6">
                      <Checkbox
                        checked={d.checked}
                        onChange={(e) =>
                          onRowChange(e.currentTarget.checked, index)
                        }
                      />
                    </td>
                  )}
                  {collapsible && (
                    <td className="p-3">
                      <span
                        className={`collapse__arrow ${
                          expandedRows.includes(index)
                            ? 'collapse__arrow-down'
                            : 'collapse__arrow-right'
                        }`}
                      ></span>
                    </td>
                  )}
                  {columns.map(({ dataIndex, className, render, key }) => (
                    <td
                      className={cx({
                        'px-6 py-3': !render,
                        [className]: !!className,
                      })}
                      key={rowKey + key}
                    >
                      {render ? render(d[dataIndex], d) : d[dataIndex]}
                    </td>
                  ))}
                </tr>
                {expandedRows.includes(index) ? (
                  <tr key={'row-expanded-' + index}>
                    <td colSpan={3}>
                      <div className="log-panel">{d.exp_data}</div>
                    </td>
                  </tr>
                ) : (
                  ''
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const SkeletonLoaderTable = ({
  rowLen = 10,
  colLen = 3,
  borderless = false,
}: {
  rowLen?: number;
  colLen?: number;
  borderless?: boolean;
}) => {
  const rowArray = Array(rowLen).fill('');
  const colArray = Array(colLen).fill('');

  return (
    <div className="py-3 px-2 w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <div
          className={cx(
            'flex space-x-5 items-center py-2 border-b border-gray-200',
            {
              'border-t': !borderless,
            }
          )}
        >
          {colArray.map((_, col) => (
            <div
              key={col}
              className={cx(
                'h-4 bg-gray-150 rounded mb-4 border-b border-gray-200 py-2',
                {
                  'flex-grow w-3/12': col < colLen - 1,
                  'flex-grow-0 w-16': col === colLen - 1,
                }
              )}
            />
          ))}
        </div>

        {rowArray.map((_, row) => (
          <div
            key={row}
            className="flex space-x-5 items-center border-b border-gray-200 py-2"
          >
            {colArray.map((_, col) => (
              <div
                key={col}
                className={cx('h-4 bg-gray-150 rounded', {
                  'flex-grow': col < colLen - 1,
                  'flex-grow-0 w-16': col === colLen - 1,
                })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
