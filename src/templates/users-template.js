import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Users from '../components/Users';
import Page from '../components/Page';

const UsersTemplate = () => {
  return (
    <Layout title={'Users'} description={'asdasdad'}>
      <Sidebar isIndex />
      <Page>
        <Users />
      </Page>
    </Layout>
  );
};


export default UsersTemplate;
