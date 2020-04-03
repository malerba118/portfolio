import React from 'react';
import { GridList, Parallax, FullscreenStates as states } from 'components'
import styles from './App.module.css'

function App() {
  return (
    <Parallax>
      <div className={styles.header}>
        <img className={styles.headerLayerOne} src="header-1.svg" />
        <img className={styles.headerLayerTwo} src="header-2.svg" />
        <div className={styles.avatarFrame}>
            <Parallax.Layer className={styles.avatarParallax} rate={.2}>
              <img className={styles.avatar} src="avatar.jpg" />
            </Parallax.Layer>
        </div>
        <div className={styles.headerRight}>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tabs}>
        </div>
        <GridList>
          {[1, 2, 3, 4, 5].map(() => (
            <GridList.Item>
                {({ open, close, status }) => {
                  const openish = status === states.OPEN || status === states.OPENING;
                  return (
                    <div 
                      onClick={() => {
                        if (!openish) {
                          open();
                        }
                        if (openish) {
                          close();
                        }
                      }} 
                      style={{height: '100%', background: 'white'}}
                    >
                    </div>
                  )
                }}
            </GridList.Item>
          ))}
        </GridList>
      </div>
    </Parallax>
  );
}

export default App;
