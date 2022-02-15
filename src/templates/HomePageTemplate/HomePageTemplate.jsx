import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { Welcome } from '../../components/Welcome';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const [showModal, setShowModal] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowModal(false), 3000);
  }, []);
  useEffect(() => {
    setShowContent(!showModal);
  }, [showModal]);
  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          {showModal && (
            <div className="welcomeScreen">
              <Welcome />
            </div>
          )}
          <div className={`container-todo ${showContent ? 'active' : ''}`}></div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
