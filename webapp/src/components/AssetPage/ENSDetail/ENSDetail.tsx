import React from 'react'
import { Badge, Container } from 'decentraland-ui'
import { AssetImage } from '../../AssetImage'
import { PageHeader } from '../../PageHeader'
import { Network } from '../Network'
import { Props } from './ENSDetail.types'
import Title from '../V2/Title'
import { Box } from '../../AssetBrowse/Box'
import { Owner } from '../V2/Owner'
import ListedBadge from '../../ListedBadge'
import Price from '../V2/Price'
import Expiration from '../V2/Expiration'
import { Actions } from '../Actions'
import { Bids } from '../Bids'
import { TransactionHistory } from '../TransactionHistory'
import styles from './ENSDetail.module.css'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

const ENSDetail = ({ nft }: Props) => {
  return (
    <div className={styles.detail}>
      <PageHeader>
        <AssetImage asset={nft} showMonospace />
        {!!nft.activeOrderId && <ListedBadge className={styles.listedBadge} />}
      </PageHeader>
      <Container>
        <div className={styles.info}>
          <div className={styles.left}>
            <div>
              <Title asset={nft} />
              <div className={styles.badges}>
                <Badge color="#37333d">{t('global.ens')}</Badge>
              </div>
            </div>
            <div className={styles.ownerAndCollection}>
              <Owner asset={nft} />
            </div>
          </div>
          <div className={styles.right}>
            <Box className={styles.box}>
              <Price asset={nft} />
              <Network asset={nft} />
              <Actions nft={nft} />
              <Expiration />
            </Box>
          </div>
        </div>
        <Bids nft={nft} />
        <TransactionHistory nft={nft} />
      </Container>
    </div>
  )
}

export default React.memo(ENSDetail)
