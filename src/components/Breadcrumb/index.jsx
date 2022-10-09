import React, { useEffect, useMemo } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import menuItems from "../../navItem";

const MyBreadcrumb = ({ breadcrumbItems }) => {
  const breadcrumbNameLists = useMemo(() => {
    console.log(breadcrumbItems);
    const firstItem = menuItems.find((item) => item.key === breadcrumbItems[0]);
    if (breadcrumbItems.length > 1) {
      const secondItem = firstItem.children.find(
        (item) => item.key === breadcrumbItems[1]
      );
      return [
        { key: firstItem.key, label: firstItem.label },
        { key: firstItem.key + "/" + secondItem.key, label: secondItem.label },
      ];
    }
    return [{ key: firstItem.key, label: firstItem.label }];
  }, [breadcrumbItems]);

  useEffect(() => {
    console.log(breadcrumbNameLists);
  }, [breadcrumbNameLists]);

  return (
    <Breadcrumb>
      {breadcrumbNameLists.map((breadcrumbName) => {
        return (
          <Breadcrumb.Item key={breadcrumbName.key}>
            <Link to={breadcrumbName.key}>{breadcrumbName.label}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
