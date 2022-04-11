import { PlusIcon, SearchIcon } from "@mergestat/icons";
import React, { useState } from "react";
import { Tag } from "../Filter/Tag";

type MultiSelectProps = {
  set_state: [object],
  get_state?:(state)=>void
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ set_state, get_state}) => {
  const [state, setState] = useState( [...set_state]);
  const [value, setValue] = useState("")
  const [isActive, setIsActive] = useState(false)

  window.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.localName !== "input") {
      setIsActive(false)
    }
  });

  window.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && value.length > 0) {
      setState([...state, { title: value, checked: true }])
      get_state ? get_state(state) : "";
      setValue("")
    }  
  });

  return (
    <div className="t-container" >
      <div  className="t-tags-container" >
        {state.map((item, index) => {
          if(item.checked) {
            return (
              <Tag
                skin="gray"
                key={`key_${index}`}
                onClick={() => {
                  state[index].checked = !state[index].checked;
                  setState([...state])
                  get_state ? get_state(state) : "";
                }}
              >
                {item.title}
              </Tag>
            )
          }
        })}
      </div>
      <div className={`t-search-container ${isActive&&"t-shadow"}`}>
        <label
          className={`t-inptut-container  ${isActive&&"active"}`}
          onClick={()=>setIsActive(true)}
        >
          <SearchIcon className="t-icon" />
          <input
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
          />
        </label>
        {isActive && (
          <div>
            <div className="p-3">
              {state.map((item, index) => {
                if (item.title.includes(value)) {
                  return (
                    <div key={`key2_${index}`}>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(e) => {
                            state[index].checked = !state[index].checked;
                            setState([...state])
                            get_state ? get_state(state) : "";
                          }}
                        />
                        {item.title}
                      </label>
                    </div>
                  )
                }
              })}
            </div>
            <div className="t-add-container">
              <button
                onClick={() => {
                  value.length > 0 ? setState([...state, { title: value, checked: true }]) : "";
                  get_state ? get_state([...state, { title: value, checked: true }]) : "";
                  setValue("");
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
}
