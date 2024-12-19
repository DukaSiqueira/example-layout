import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={styles.container}>
      {/* Sidebar fixa */}
      <Sidebar />
      {/* Conteúdo principal */}
      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  main: {
    marginLeft: '250px', // Reservando espaço para a sidebar
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
};

export default Layout;
