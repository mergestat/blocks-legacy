import React, { useState } from 'react';
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

  window.addEventListener('click', (e) => {
    const target = e.target as Element
    if (target.localName !== 'input' && target.localName !== 'label') {
      setIsActive(false);
    }
  });

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && value.length > 0) {
      setState([...state, { title: value, checked: true }]);

      if (getState) {
        getState([...state]);
      }
      setValue('');
    }
  });

  return (
    <div className="t-container">
      <div className="t-tags-container">
        {state.map((item, index) => {
          if (item.checked) {
            return (
              <Tag
                skin="gray"
                key={`key_${index}`}
                onClick={() => {
                  state[index].checked = !state[index].checked;
                  setState([...state]);
                  if (getState) {
                    getState([...state]);
                  }
                }}
              >
                {item.title}
              </Tag>
            );
          }
        })}
      </div>
      <div className={`t-search-container ${isActive && 't-shadow'}`}>
        <label
          className={`t-input-container ${isActive && 'active'}`}
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
                return (item.title.includes(value)) ? (
                  <div key={`key2_${index}`}>
                    <Checkbox
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
                  </div>
                ) : null
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
                <span className="ml-3">Create {value}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
