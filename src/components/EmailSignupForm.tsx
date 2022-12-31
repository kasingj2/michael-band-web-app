import { IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonCard, IonCardHeader, IonContent, IonCardContent } from '@ionic/react'
import React from 'react'
import './EmailSignupForm.css'

type Props = {}

function EmailSignupForm({ }: Props) {
    return (
        <form className="ion-padding">
            <IonCard className="FormCard">
                <IonCardHeader className='ion-text-center'>Sign up to recieve updates on Michael the Band</IonCardHeader>
                <IonCardContent className='ion-justify-content-center'>
                    <IonItem className='emailInputItem'>
                        <IonLabel position="stacked">email</IonLabel>
                        <IonInput className='emailInputField' placeholder="jim@gmail.com" type="email" />
                    </IonItem>
                    <IonButton className="ion-margin-top ion-padding-horizontal" type="submit">
                        sign up
                    </IonButton>



                </IonCardContent>
            </IonCard>
        </form>)
}

export default EmailSignupForm