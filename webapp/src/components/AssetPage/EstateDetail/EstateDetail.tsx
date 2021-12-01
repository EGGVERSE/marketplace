import React from 'react'
import { Badge, Container } from 'decentraland-ui'
import { AssetImage } from '../../AssetImage'
import { PageHeader } from '../../PageHeader'
import { Network } from '../Network'
import { Description } from '../Description'
import { Props } from './EstateDetail.types'
import Title from '../V2/Title'
import { Box } from '../../AssetBrowse/Box'
import { Owner } from '../V2/Owner'
import ListedBadge from '../../ListedBadge'
import Price from '../V2/Price'
import Expiration from '../V2/Expiration'
import { Actions } from '../Actions'
import { Bids } from '../Bids'
import { TransactionHistory } from '../TransactionHistory'
import { JumpIn } from '../JumpIn'
import { ProximityHighlights } from '../ProximityHighlights'
import styles from './EstateDetail.module.css'
import { ParcelCoordinates } from './ParcelCoordinates'

const EstateDetail = ({ nft }: Props) => {
  const estate = nft.data.estate!
  const { x, y } = estate.parcels[0]

  return (
    <div className={styles.detail}>
      <PageHeader>
        <AssetImage asset={nft} isDraggable />
        {!!nft.activeOrderId && <ListedBadge className={styles.listedBadge} />}
      </PageHeader>
      <Container>
        <div className={styles.info}>
          <div className={styles.left}>
            <div>
              <Title asset={nft} />
              <div className={styles.badges}>
                <Badge color="#37333d">
                  {estate.size.toLocaleString()} LAND
                </Badge>
                {estate.size > 0 ? <JumpIn x={x} y={y} /> : null}
              </div>
            </div>
            <Description text={estate.description} />
            <div className={styles.ownerAndCollection}>
              <Owner asset={nft} />
            </div>
            <ProximityHighlights nft={nft} />
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
        <ParcelCoordinates estateId={nft.tokenId} />
        <TransactionHistory nft={nft} />
      </Container>
    </div>
  )
}

export default React.memo(EstateDetail)
