import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { PlusIcon, SearchIcon } from '@mergestat/icons';
import { Tag } from '../Filter/Tag';
import { Checkbox } from '../Form';

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
  const [state, setState] = useState(setStateToProps);
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: MouseEvent) => {
    const className = (e.target as Element).className;
    setIsActive(className !== 'sb-main-padded sb-show-main' && className !== 't-container');
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && value.length > 0) {
      setState([...state, { title: value, checked: true }]);

      if (getState) {
        getState([...state]);
      }
      setValue('');
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick, false);
    window.addEventListener('keypress', handleKeyPress, false);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keypress', handleKeyPress);
    }
  }, []);

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
      <div className={cx('t-search-container', {'t-shadow': isActive})}>
        <label
          className={cx('t-input-container', {'active': isActive})}
          onClick={() => setIsActive(true)}
        >
          <SearchIcon className="t-icon" />
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </label>
        {isActive && (
          <div>
            <div className="p-3">
              {state.map((item, index) => {
                return item.title.includes(value) ? (
                  <Checkbox
                    key={`key2_${index}`}
                    label={item.title}
                    checked={item.checked}
                    onChange={(e) => {
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
