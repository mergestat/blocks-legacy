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

  const [data, setData] = useState(dataSource.map(data => ({
    ...data,
    checked: false
  })));

  const checkedState = () => {
    const checkedDataLen: number = data.filter(d => d.checked).length

    return checkedDataLen === 0
      ? CHECKBOX_STATES.Unchecked
      : checkedDataLen === data.length
        ? CHECKBOX_STATES.Checked
        : CHECKBOX_STATES.Indeterminate
  }

  const onRowChange = (checked: boolean, index: number) => {
    data[index].checked = checked;
    setData([ ...data ]);
    onSelectedChange(data.filter(d => d.checked));
  }

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
              <th className='w-0 pl-6'>
                {hasSelectAll && (
                  <Checkbox
                    value = {checkedState()}
                    onChange = {(e) => {
                      const checked = e.currentTarget.checked;

                      setData([
                        ...data.map(item => ({
                          ...item,
                          checked: checked,
                        }))
                      ]);

                      onSelectedChange(checked ? data : []);
                    }}
                  />
                )}
              </th>
            )}
            {columns.map(({ title, key, headerClassName }) => (
              <th
                scope="col"
                key={key}
                className={cx({
                  'whitespace-nowrap': noWrapHeaders,
                  'px-6': title && typeof title === 'string',
                  [headerClassName]: !!headerClassName,
                })}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cx(`bg-${tableBodyBackground}`)}>
          {data.map((d, index) => {
            const rowKey = d.id || Math.random();

            return (
              <tr key={rowKey}>
                {checkable && (
                  <td className='w-0 pl-6'>
                    <Checkbox
                      checked={d.checked}
                      onChange={(e) => onRowChange(e.currentTarget.checked, index)}
                    />
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
