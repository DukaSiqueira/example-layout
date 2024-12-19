import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>Go Ingressos</div>
      <ul style={styles.menu}>
        <li>
          <Link href="/" style={styles.link}>Início</Link>
        </li>
        <li>
          <Link href="/empresa" style={styles.link}>Empresa</Link>
        </li>
        <li>
          <Link href="/usuarios" style={styles.link}>Usuários</Link>
        </li>
        <li>
          <Link href="/clientes" style={styles.link}>Clientes</Link>
        </li>
        <li>
          <Link href="/produtos" style={styles.link}>Produtos</Link>
        </li>
      </ul>
      <div style={styles.footer}>
        <button style={styles.button}>Configurações</button>
      </div>
    </aside>
  );
};

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '250px',
    backgroundColor: '#20232a',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flex: 1,
  },
  link: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '5px',
    backgroundColor: '#282c34',
    marginBottom: '0.5rem',
    cursor: 'pointer',
  },
  footer: {
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#444',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    cursor: 'pointer',
  },
};

export default Sidebar;
