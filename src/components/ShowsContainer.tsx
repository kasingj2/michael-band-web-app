

import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/react'
import React from 'react'
import './ShowsContainer.css'

type Props = {}

const ShowsContainer = (props: Props) => {
  return (
    <div>ShowsContainer

<div>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonCard>

                                    <IonCardHeader>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>
                                        </IonList>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol>
                                <IonCard>
                                    <img alt="Silhouette of mountains" src="../../resources/homeImage.png" />

                                    <IonCardHeader>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonThumbnail slot="start">
                                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                                </IonThumbnail>
                                                <IonLabel>Item</IonLabel>
                                            </IonItem>
                                        </IonList>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

    </div>

  )
}

export default ShowsContainer