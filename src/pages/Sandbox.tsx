import * as react from '@ionic/react';
import { useParams } from 'react-router';
import './Sandbox.css';
import { IonGrid, IonCol, IonRow, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const Sandbox: React.FC = () => {
    return (
        <react.IonPage>
            <react.IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <react.IonCard>
                                <img alt="Silhouette of mountains" src="../../resources/homeImage.png" />

                                <react.IonCardHeader>
                                    <react.IonCardTitle>Card Title</react.IonCardTitle>
                                    <react.IonCardSubtitle>Card Subtitle</react.IonCardSubtitle>
                                </react.IonCardHeader>
                                <react.IonCardContent>
                                    <react.IonList>
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
                                    </react.IonList>
                                </react.IonCardContent>
                            </react.IonCard>
                        </IonCol>
                        <IonCol>
                            <react.IonCard>
                                <img alt="Silhouette of mountains" src="../../resources/homeImage.png" />

                                <react.IonCardHeader>
                                    <react.IonCardTitle>Card Title</react.IonCardTitle>
                                    <react.IonCardSubtitle>Card Subtitle</react.IonCardSubtitle>
                                </react.IonCardHeader>
                                <react.IonCardContent>
                                    <react.IonList>
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
                                    </react.IonList>
                                </react.IonCardContent>
                            </react.IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </react.IonContent>
        </react.IonPage>


    );
};

export default Sandbox;
