import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const CreateArticleTemplate = () => {
  return (
    <Layout title={'Create Article'} description={'Lorem ipsum dolor sit amet.'}>
      <Sidebar isIndex />
      <Page>
        <h1>Create Article</h1>
        <form action="">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <button>Submit</button>
        </form>
      </Page>
    </Layout>
  );
};

export default CreateArticleTemplate;
