import React from "react";
import { useNavigate } from "react-router-dom";
import { Group26092124 } from "../../../../icons/Group26092124/Group26092124";
import { Group } from "../../../../components/Group";
import "./style.css";

export const NeviHomeWrapper = ({
  nevi,
  className,
  searchTerm = "",
  groupIcon = <Group26092124 className="group-2609212-4-instance" />,
}) => {
  const navigate = useNavigate();

  const handleForecastClick = () => {
    if (searchTerm.trim()) {
      navigate(`/forecast?query=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/select");
    }
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className={`nevi-home-wrapper ${className}`}>
      <div className="frame-33">
        {/* HOME 텍스트 */}
        <div className="item-link" onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          HOME
        </div>

        {/* FORECAST */}
        <div className="text-wrapper-25" onClick={handleForecastClick} style={{ cursor: "pointer" }}>
          FORECAST
        </div>

        {/* SEARCH */}
        <div className="text-wrapper-25" onClick={handleSearchClick} style={{ cursor: "pointer" }}>
          SEARCH
        </div>
      </div>

      {/* 왼쪽 아이콘에도 클릭 이벤트 추가 */}
      <div onClick={handleHomeClick} style={{ cursor: "pointer", display: "inline-block" }}>
        <Group
          divClassName="group-5"
          divClassName1="group-5"
          divClassNameOverride="group-5"
          frameClassName="group-4"
          frameClassNameOverride="group-6"
          icon="icon-3"
          iconClassName="group-3"
          override={groupIcon}
        />
      </div>
    </div>
  );
};