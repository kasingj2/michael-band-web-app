import { IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonCard, IonCardHeader, IonContent, IonCardContent } from '@ionic/react'
import React from 'react'

type Props = {}

const emailInputFieldStyle = {
    width: '20rem'
}

const formCardStyle = {
    background: `var(--ion-color-step-200)`
}

function EmailSignupForm({ }: Props) {
    return (
        <form className="ion-padding">
            <IonCard style={formCardStyle}>
                <IonCardHeader className='ion-text-center'>Sign up to recieve updates on Michael the Band</IonCardHeader>
                <IonCardContent className='ion-justify-content-center'>
                    <IonItem className='emailInputItem'>
                        <IonLabel position="stacked">email</IonLabel>
                        <IonInput style={emailInputFieldStyle} placeholder="jim@gmail.com" type="email" />
                    </IonItem>
                    <IonButton className="ion-margin-top ion-padding-horizontal" type="submit">
                        sign up
                    </IonButton>



                </IonCardContent>
            </IonCard>
        </form>)
}

export default EmailSignupForm