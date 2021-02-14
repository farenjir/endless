import React from "react";
// antDesign
import { Layout } from "antd";
// componetnts
import DashTopNav from "../common/dashboard/DashTopNav";
import DashSidebar from "../common/dashboard/DashSidbar";

const DashboardLayout = ({ children }) => {
  const { Content, Footer } = Layout;
  return (
    <Layout
      style={{ minHeight: "100vh", direction: "rtl", fontFamily: "BYekan" }}
    >
      {/* Sidbar */}
      <DashSidebar />
      <Layout className="site-layout">
        {/* topNav */}
        <DashTopNav style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* children */}
            {children}
            {/* children */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          طراحی شده توسط تیم برنامه نویسی <strong>اندلس</strong>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
