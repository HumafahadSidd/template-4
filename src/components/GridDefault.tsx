
import React from 'react';
import BreadcrumbHeader from '../components/NavBar';

export default function GridDefaultPage() {
  const breadcrumbs = [
    { href: '/', label: 'Home', active: false },
    { href: '/Shop', label: 'Shop', active: false },
    { href: '#', label: 'Grid Default', active: true },
  ];

  return (
    <div>
      <BreadcrumbHeader title="Shop Grid Default" breadcrumbs={"shop left "} />
    </div>
  );
}
