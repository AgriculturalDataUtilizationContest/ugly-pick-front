import React from "react";
import { Group } from "../../../../components/Group";
import { Link } from "../../../../components/Link";
import { Group26092122 } from "../../../../icons/Group26092122/Group26092122";
import { LineRoundedEmail1 } from "../../../../icons/LineRoundedEmail1";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <img
        className="divider"
        alt="Divider"
        src="https://c.animaapp.com/TSkI5naX/img/divider.svg"
      />

      <div className="frame-6">
        <div className="frame-7">
          <Group
            divClassName="group-2609212-instance"
            divClassName1="group-2609212-instance"
            divClassNameOverride="group-2609212-instance"
            frameClassName="group-instance"
            frameClassNameOverride="design-component-instance-node"
            icon="icon-3"
            iconClassName="group-2609212"
            override={<Group26092122 className="group-2609212-2" />}
          />
          <div className="frame-8">
            <div className="footer-right">
              <div className="footer-column">
                <div className="footer-title">Product</div>

                <div className="footer-links">
                  <div className="master-link-wrapper">
                    <div className="master-link">
                      <div className="text-wrapper-9">Mission</div>
                    </div>
                  </div>

                  <div className="master-link-wrapper">
                    <div className="master-link">
                      <div className="text-wrapper-9">Forecast Service</div>
                    </div>
                  </div>

                  <div className="master-link">
                    <div className="text-wrapper-9">Search</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-9">
              <div className="footer-title-2">Contact Us</div>

              <div className="link-wrapper">
                <Link
                  color="color"
                  divClassName="link-2"
                  icon="default"
                  iconLeft
                  iconRight={false}
                  masterLinkClassName="link-instance"
                  override={
                    <LineRoundedEmail1 className="line-rounded-email" />
                  }
                  text="Gleepick@gmail.com"
                  weight="regular"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-10">
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/TSkI5naX/img/line-135.svg"
          />

          <div className="footer-content">
            <div className="frame-11">
              <p className="footer-left">Copyright © GLEE PICK TEAM</p>

              <p className="footer-right-2">
                <span className="span">All Rights Reserved | </span>

                <span className="text-wrapper-10">&nbsp;</span>

                <span className="text-wrapper-11">GLEEPICK TEAM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
