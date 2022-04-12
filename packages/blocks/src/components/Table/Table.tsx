import React from 'react';
import cx from 'classnames';

type TableProps = {
  dataSource: Array<any>;
  columns: Array<{
    title?: string;
    dataIndex?: any;
    className?: string;
    key?: any;
    render?: React.ReactNode | any | undefined;
  }>;
  className?: string;
  responsive?: boolean;
  emptyText?: string | React.ReactNode;
  hovered?: boolean;
  rowKey?: any;
  loading?: boolean;
  scrollY?: string | number;
  noWrapHeaders?: boolean;
  borderless?: boolean;
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
          <tr>
            {columns.map(({ title, key }) => (
              <th
                scope="col"
                key={key}
                className={cx({ 'whitespace-nowrap': noWrapHeaders })}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {dataSource.map((data) => {
            const rowKey = data.id || Math.random();

            return (
              <tr key={rowKey}>
                {columns.map(({ dataIndex, className, render, key }) => (
                  <td
                    className={cx(``, {
                      [className]: !!className,
                    })}
                    key={rowKey + key}
                  >
                    {render ? render(data[dataIndex], data) : data[dataIndex]}
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
