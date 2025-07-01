import React from "react";
import { Group26092121 } from "../../icons/Group26092121";
import "./style.css";

export const Group = ({
  icon,
  iconClassName,
  frameClassName,
  divClassName,
  frameClassNameOverride,
  divClassNameOverride,
  divClassName1,
  override = <Group26092121 className="group-2609212-1" />,
}) => {
  return (
    <>
      {icon === "icon-2" && (
        <img
          className={`group icon ${iconClassName}`}
          alt="Icon"
          src="https://c.animaapp.com/TSkI5naX/img/icon-icon2.svg"
        />
      )}

      {icon === "icon-3" && (
        <div className={`group icon-icon ${iconClassName}`}>
          <div className={`frame-30 ${frameClassName}`}>
            <div className="frame-31">
              <div className={`text-wrapper-24 ${divClassName}`}>Uh!</div>

              <div className={`frame-32 ${frameClassNameOverride}`}>
                <div className={`text-wrapper-24 ${divClassNameOverride}`}>
                  GLEE
                </div>

                <div className={`text-wrapper-24 ${divClassName1}`}>PICK</div>
              </div>
            </div>
          </div>

          {override}
        </div>
      )}
    </>
  );
};
