import { AnalyticsIcon } from "./icons/analytics";
import { DiscountIcon } from "./icons/discount";
import { InvoiceIcon } from "./icons/invoice";
import { OrderIcon } from "./icons/order";
import { ProductIcon } from "./icons/product";

export const NAVIGATION = [
  {
    kind: "header",
    title: "overview",
  },
  {
    segment: "dashboard",
    title: "analytics",
    route: "/dashboard",
    icon: (color: string) => (
      <AnalyticsIcon color={color} width={20} height={20} />
    ),
  },
  // {
  //   kind: "divider",
  // },
  {
    kind: "header",
    title: "management",
  },
  {
    segment: "branches",
    title: "branches",
    icon: (color: string) => (
      <ProductIcon color={color} width={20} height={20} />
    ),
    route: "/dashboard/branches",
  },
  {
    segment: "pos",
    title: "pos",
    icon: (color: string) => (
      <ProductIcon color={color} width={20} height={20} />
    ),
    route: "/dashboard/pos",
  },
  {
    segment: "currency",
    title: "currency",
    icon: (color: string) => (
      <ProductIcon color={color} width={20} height={20} />
    ),
    route: "/dashboard/currency",
  },
  {
    segment: "business",
    title: "business",
    icon: (color: string) => (
      <ProductIcon color={color} width={20} height={20} />
    ),
    route: "/dashboard/business",
  },
  // {
  //   kind: "header",
  //   title: "users",
  // },
  // {
  //   segment: "permissions",
  //   title: "permissions",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/permissions",
  // },
  // {
  //   segment: "super",
  //   title: "super",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/users/super",
  // },
  // {
  //   segment: "branch_admin",
  //   title: "branch_admin",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/users/branch_manager",
  // },
  // {
  //   segment: "pos_manager",
  //   title: "pos_manager",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/users/pos_manager",
  // },
  // {
  //   segment: "pos_user",
  //   title: "pos_user",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/users/pos_user",
  // },
  // {
  //   segment: "products",
  //   title: "products",
  //   icon: (color: string) => (
  //     <ProductIcon color={color} width={20} height={20} />
  //   ),
  //   route: "/dashboard/products",
  // },
  // {
  //   segment: "discounts",
  //   title: "discounts",
  //   route: "/dashboard/discounts",
  //   icon: (color: string) => (
  //     <DiscountIcon color={color} width={20} height={20} />
  //   ),
  // },
  // {
  //   segment: "orders",
  //   title: "orders",
  //   route: "/dashboard/orders",
  //   icon: (color: string) => <OrderIcon color={color} width={20} height={20} />,
  // },
  // {
  //   segment: "invoices",
  //   title: "invoices",
  //   route: "/dashboard/invoices",
  //   icon: (color: string) => (
  //     <InvoiceIcon color={color} width={20} height={20} />
  //   ),
  // },
];
