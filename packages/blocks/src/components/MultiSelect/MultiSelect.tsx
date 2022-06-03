import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { PlusIcon, SearchIcon } from '@mergestat/icons';
import { Badge } from '../Badge';
import { Menu } from '../Menu';
import { Dropdown } from '../Dropdown';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(setStateToProps);
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Element)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isActive, containerRef]);

  return (
    <div>
      <div className="t-multi-select-tag-list">
        {state.map((item, index) => {
          return item.checked ? (
            <Badge
              variant="default"
              closable={true}
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
            </Badge>
          ) : null;
        })}
      </div>
      <div className="t-multi-select-wrapper" ref={containerRef}>
        <Input
          className={cx('outline-0', { active: isActive })}
          placeholder="Add a tag..."
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
          <div className="t-menu active w-full">
            <div className="t-multi-select-value-list">
              {state.map((item, index) => {
                return item.title.includes(value) ? (
                  <div className="t-menu-item">
                    <Checkbox
                      className="cursor-pointer"
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
                  </div>
                ) : null;
              })}
            </div>

            <Menu.Divider />
            <Menu.Item
              withIcon
              color="text-blue-600"
              text={'Create ' + value}
              icon={
                <PlusIcon
                  className="t-icon"
                  onClick={() => {
                    if (value.length > 0) {
                      setState([...state, { title: value, checked: true }]);

                      if (getState) {
                        getState([...state, { title: value, checked: true }]);
                      }

                      setValue('');
                    }
                  }}
                />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
