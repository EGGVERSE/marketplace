import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Stats } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Rarity } from '@dcl/schemas'
import { locations } from '../../../modules/routing/locations'
import { Network } from '../Network'
import { Description } from '../Description'
import { Props } from './ItemDetail.types'
import RarityBadge from '../RarityBadge'
import { AssetType } from '../../../modules/asset/types'
import GenderBadge from '../GenderBadge'
import CategoryBadge from '../CategoryBadge'
import { Owner } from '../Owner'
import Collection from '../Collection'
import Price from '../Price'
import BaseDetail from '../BaseDetail'
import styles from './ItemDetail.module.css'

const ItemDetail = ({ item, wallet }: Props) => {
  const wearable = item.data.wearable!
  const isOwner = wallet?.address === item.creator
  const canBuy = !isOwner && item.isOnSale && item.available > 0

  return (
    <BaseDetail
      asset={item}
      assetImageProps={{ isDraggable: true }}
      isOnSale={item.isOnSale}
      badges={
        <>
          <RarityBadge rarity={item.rarity} assetType={AssetType.ITEM} />
          <CategoryBadge wearable={wearable} assetType={AssetType.ITEM} />
          <GenderBadge wearable={wearable} assetType={AssetType.ITEM} />
        </>
      }
      left={
        <>
          <Description text={wearable.description} />
          <div className="row">
            <Owner asset={item} />
            <Collection asset={item} />
          </div>
        </>
      }
      box={
        <>
          <Price asset={item} />
          <div className="row">
            <Stats title={t('asset_page.stock')}>
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
          </div>
          {isOwner ? (
            <div className={styles.ownerButtons}>
              <Button fluid>{t('asset_page.actions.edit_price')}</Button>
              <Button fluid>
                {t('asset_page.actions.change_beneficiary')}
              </Button>
              <Button fluid>{t('asset_page.actions.mint_item')}</Button>
            </div>
          ) : (
            canBuy && (
              <Button
                fluid
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
            )
          )}
        </>
      }
    />
  )
}

export default React.memo(ItemDetail)
