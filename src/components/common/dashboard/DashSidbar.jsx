import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
// antDesign
import { Layout, Menu } from "antd";
import {
  WindowsOutlined,
  UsergroupAddOutlined,
  NotificationOutlined,
  ScheduleOutlined,
  ShoppingOutlined,
  FormOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

const DashSidebar = () => {
  const user = useSelector(state => state.user);
  // collapse
  const { Sider } = Layout;
  return (
    <Sider theme="dark" collapsed>
      <Link to="/">
        <div class="m-3">
          <i className="fas fa-infinity icon-brand"></i>
          </div>
      </Link>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ direction: "ltr", marginTop: "30px" }}
      >
        <Menu.Item
          style={{ marginTop: "6px" }}
          key="1"
          icon={<ScheduleOutlined style={{ fontSize: "20px" }} />}
        >
          <Link to="/dashboard">داشبورد</Link>
        </Menu.Item>
        <Menu.Item
          style={{ marginTop: "6px" }}
          key="2"
          icon={<FormOutlined style={{ fontSize: "20px" }} />}
        >
          <Link to="/dashboard/tasks">تسک</Link>
        </Menu.Item>
        <Menu.Item
          className="mt-3"
          key="3"
          title="دوره ها"
          icon={<WindowsOutlined style={{ fontSize: "20px" }} />}
        >
          <Link to="/dashboard/courses">دوره ها</Link>
        </Menu.Item>
        <MenuItem
          key="4"
          icon={<NotificationOutlined style={{ fontSize: "20px" }} />}
          title="خبرنامه"
          className="mt-3"
        >
          <Link to="/dashboard/weblog">خبرنامه</Link>
        </MenuItem>
        <MenuItem
          key="5"
          icon={<ShoppingOutlined style={{ fontSize: "20px" }} />}
          title="اشتراک ویژه"
          className="mt-3"
        >
          <Link to="/dashboard/vip"> اشتراک ویژه</Link>
        </MenuItem>
        {!isEmpty(user) && user.isAdmin ? (
          <Fragment>
            {" "}
            <Menu.Item
              className="mt-3"
              key="6"
              icon={
                <WindowsOutlined style={{ fontSize: "20px", color: "red" }} />
              }
            >
              <Link to="/dashboard/editcourses">مدیریت دوره ها </Link>
            </Menu.Item>
            <MenuItem
              key="7"
              icon={
                <NotificationOutlined
                  style={{ fontSize: "20px", color: "red" }}
                />
              }
              title="پیام ها"
              className="mt-3"
            >
              <Link to="/dashboard/editweblog">مدیریت خبرنامه</Link>
            </MenuItem>
            <Menu.Item
              key="8"
              icon={
                <UsergroupAddOutlined
                  style={{ fontSize: "20px", color: "red" }}
                />
              }
              className="mt-3"
            >
              <Link to="/dashboard/usermanager">مدیریت کاربران</Link>
            </Menu.Item>
          </Fragment>
        ) : null}
      </Menu>
    </Sider>
  );
};
export default DashSidebar;
