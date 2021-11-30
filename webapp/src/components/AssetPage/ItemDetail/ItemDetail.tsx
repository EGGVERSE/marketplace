import React from 'react'
// import { Link } from 'react-router-dom'
import {
  // Button,
  Container,
  Header,
  Stats
  // Popup
} from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Rarity } from '@dcl/schemas'
import { formatMANA } from '../../../lib/mana'
// import { locations } from '../../../modules/routing/locations'
// import { AssetType } from '../../../modules/asset/types'
// import { getAssetName } from '../../../modules/asset/utils'
import { Row } from '../../Layout/Row'
import { Column } from '../../Layout/Column'
import { AssetImage } from '../../AssetImage'
import { PageHeader } from '../../PageHeader'
import { Mana } from '../../Mana'
// import { Title } from '../Title'
// import { Owner } from '../Owner'
import { Network } from '../Network'
// import { Description } from '../Description'
// import { WearableRarity } from '../WearableRarity'
// import { WearableHighlights } from '../WearableHighlights'
// import { WearableCollection } from '../WearableCollection'
import { Props } from './ItemDetail.types'
import Title from '../V2/Title'
import styles from './ItemDetail.module.css'
import RarityBadge from '../V2/RarityBadge'
import { AssetType } from '../../../modules/asset/types'
// import IconBadge from '../V2/IconBadge'
// import { isGender, isUnisex } from '../../../modules/nft/wearable/utils'
// import { BodyShape } from '@dcl/schemas'
import GenderBadge from '../V2/GenderBadge'
import CategoryBadge from '../V2/CategoryBadge'
import { Box } from '../../AssetBrowse/Box'

const ItemDetail = (props: Props) => {
  const { item } = props
  const wearable = item.data.wearable!
  // const canBuy = item.isOnSale && item.available > 0

  return (
    <div className={styles.detail}>
      <PageHeader>
        <AssetImage asset={item} isDraggable />
      </PageHeader>
      <Container>
        <Row>
          <Column grow>
            <div>
              <Title asset={item} />
              <div className={styles.badges}>
                <RarityBadge rarity={item.rarity} assetType={AssetType.ITEM} />
                <CategoryBadge wearable={wearable} assetType={AssetType.ITEM} />
                <GenderBadge wearable={wearable} assetType={AssetType.ITEM} />
              </div>
            </div>
          </Column>
          <Column>
            <Box className={styles.box}>
              <Row className={styles.row}>
                <Stats title={t('asset_page.price')}>
                  <Mana network={item.network} withTooltip>
                    {formatMANA(item.price)}
                  </Mana>
                </Stats>
              </Row>
              <Stats title={t('asset_page.available')}>
                {item.available > 0 ? (
                  <Header>
                    {item.available.toLocaleString()}
                    <span className={styles.supply}>
                      /{Rarity.getMaxSupply(item.rarity).toLocaleString()}
                    </span>
                  </Header>
                ) : (
                  t('asset_page.sold_out')
                )}
              </Stats>
              <Network asset={item} />
            </Box>
          </Column>
        </Row>
        {/* <Title
          left={
            <Header size="large">
              <div className="text">
                {getAssetName(item)}
                <WearableRarity type={AssetType.ITEM} wearable={wearable} />
              </div>
            </Header>
          }
          right={<Owner asset={item} />}
        /> */}
        {/* <Description text={wearable.description} />
        <Row>
          <Column align="left" grow={true}>
            <Network asset={item} />
            {item.isOnSale ? (
              <>
                <Stats title={t('asset_page.price')}>
                  <Mana network={item.network} withTooltip>
                    {formatMANA(item.price)}
                  </Mana>
                </Stats>
                <Stats title={t('asset_page.available')}>
                  {item.available > 0 ? (
                    <Header>
                      {item.available.toLocaleString()}
                      <span className={styles.supply}>
                        /{Rarity.getMaxSupply(item.rarity).toLocaleString()}
                      </span>
                    </Header>
                  ) : (
                    t('asset_page.sold_out')
                  )}
                </Stats>
              </>
            ) : null}
          </Column>
          <Column align="right">
            {canBuy ? (
              <Button
                as={Link}
                to={locations.buy(
                  AssetType.ITEM,
                  item.contractAddress,
                  item.itemId
                )}
                primary
              >
                {t('asset_page.actions.buy')}
              </Button>
            ) : null}
          </Column>
        </Row>
        <Row>
          <Column>
            <WearableCollection type={AssetType.ITEM} asset={item} />
          </Column>
        </Row>
        <WearableHighlights type={AssetType.ITEM} wearable={wearable} /> */}
      </Container>
    </div>
  )
}

export default React.memo(ItemDetail)
