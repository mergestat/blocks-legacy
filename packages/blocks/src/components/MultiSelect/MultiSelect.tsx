import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { PlusIcon, SearchIcon } from '@mergestat/icons';
import { Tag } from '../Filter/Tag';
import { Checkbox, Input } from '../Form';

type MultiSelectProps = {
  setStateToProps: {
    title: string;
    checked: boolean;
  }[];
  getState?: ([]) => void;
};

export const MultiSelect: React.FC<
  MultiSelectProps &
    React.DetailedHTMLProps<
      React.DetailsHTMLAttributes<HTMLElement>,
      HTMLElement
    >
> = ({ setStateToProps, getState }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(setStateToProps);
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Element)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [isActive, containerRef]);

  return (
    <div className="t-container">
      <div className="t-tags-container">
        {state.map((item, index) => {
          return (item.checked) ? (
            <Tag
              skin="gray"
              key={`key_${index}`}
              onClose={() => {
                item.checked = !item.checked;
                setState([...state]);

                if (getState) {
                  getState([...state]);
                }
              }}
            >
              {item.title}
            </Tag>
          ) : null;
        })}
      </div>
      <div className={cx('t-search-container', {'t-shadow': isActive})} ref={containerRef}>
        <Input
          className={cx('outline-0', {'active': isActive})}
          startIcon={<SearchIcon className="t-icon" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsActive(true)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && value.length > 0) {
              e.preventDefault();
              setState([...state, { title: value, checked: true }]);
              if (getState) getState([...state]);
              setValue('');
            }
          }}
        />
        {isActive && (
          <div>
            <div className="p-3">
              {state.map((item, index) => {
                return item.title.includes(value) ? (
                  <Checkbox
                    key={`key2_${index}`}
                    label={item.title}
                    checked={item.checked}
                    onChange={() => {
                      state[index].checked = !state[index].checked;
                      setState([...state]);

                      if (getState) {
                        getState([...state]);
                      }
                    }}
                  />
                ) : null;
              })}
            </div>
            <div className="t-add-container">
              <button
                onClick={() => {
                  if (value.length > 0) {
                    setState([...state, { title: value, checked: true }]);

                    if (getState) {
                      getState([...state, { title: value, checked: true }]);
                    }

                    setValue('');
                  }
                }}
              >
                <PlusIcon className="t-icon" />
                <p className="ml-3">Create {value}</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
