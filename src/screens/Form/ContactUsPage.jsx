import { useEffect, useState } from "react";
import { View, TextInput, Alert, Pressable, Text } from "react-native";
import Card from "../../components/Card";
import ContentWrapper from "../../components/ContentWrapper";
import styles from "../../components/styles/styles";
import Button from "../../components/Button";
import _ from "lodash";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";

export default function ContactUsPage({ navigation }) {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [birthDate, setBirthDate] = useState(new Date())
  const [isBirthDateVisible, setIsBirthDateVisible] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const validateIsEmpty = (text) => {
    return _.isEmpty(text)
  }

  const validateUserName = (text) => {
    let reg = /[^a-zA-Z]/

    if (validateIsEmpty(text)) {
      alert("Username is required!");
      return true;
    }
    if (reg.test(text)) {
      alert("Username should contain only letters only!");
      return true;
    }
    if (text.length > 50) {
      alert("Username should not be longer than 50 characters!");
      return true;
    }
    else {
      return false
    }
  }

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (validateIsEmpty(text)) {
      alert("Email is required!");
      return true;
    }
    if (reg.test(text) === false) {
      alert("Email format is not correct!");
      return true;
    }
    else {
      return false
    }
  }

  const validateBirthDate = (text) => {
    if (validateIsEmpty(text)) {
      alert("Birthday is required!");
      return true;
    } else {
      return false
    }
  }

  const onSubmit = () => {
    // validate all the inputs
    if (
      !validateUserName(userName) &&
      !validateEmail(userEmail) &&
      !validateBirthDate(moment(birthDate).format('DD/MM/YYYY'))
    ) {
      // Testing ways of doing popup
      // First method of doing pop up
      // Alert.alert(
      //   'Submitted',
      //   `Name: ${userName}\n\nEmail: ${userEmail}\n\nBirthday: ${moment(birthDate).format('DD/MM/YYYY')}`
      // )

      setIsSubmit(true)
    }
  }

  return (
    <>
      <ContentWrapper>
        <Card>
          <View>
            <TextInput
              placeholder='Username'
              name='username'
              style={styles.textInput}
              onChangeText={setUserName}
              value={userName}
            />
            <TextInput
              placeholder='Email'
              name='email'
              style={styles.textInput}
              onChangeText={setUserEmail}
              value={userEmail}
            />
            <Pressable 
              onPress={() => {
                setIsBirthDateVisible(true)
              }}
            >
              <Text 
                style={[
                  styles.textInput, 
                  {
                    color: birthDate ? '#000000' : '#A0A0A0',
                    paddingVertical: 12
                  }
                ]}
              >
                {birthDate ? `${moment(birthDate).format('DD/MM/YYYY')}`
                : 'Birthday'}
              </Text>
            </Pressable>
            {isBirthDateVisible ? (
              <>
                <DateTimePickerModal
                  isVisible={isBirthDateVisible}
                  mode="date"
                  name='Birthday'
                  maximumDate={new Date()}
                  onConfirm={(date) => {
                    setBirthDate(date),
                    setIsBirthDateVisible(false)
                  }}
                  onCancel={() => {
                    setIsBirthDateVisible(false)
                  }}
                />
              </>
            ) : (<></>)}
            <Button onPress={onSubmit}>
              Submit
            </Button>
          </View>
        </Card>
      </ContentWrapper>
      {/*Second method of doing pop up */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={isSubmit}
        onBackdropPress={() => {
          setIsSubmit(false)
        }}
      >
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.modalTitle}>Username</Text>
            <Text style={styles.modalDesc}>{userName}</Text>
            <Text style={styles.modalTitle}>Email</Text>
            <Text style={styles.modalDesc}>{userEmail}</Text>
            <Text style={styles.modalTitle}>Birthday</Text>
            <Text style={styles.modalDesc}>{moment(birthDate).format('DD/MM/YYYY')}</Text>
          </View>
          <Pressable
            style={[styles.modalButton]}
            onPress={() => setIsSubmit(false)}
          >
            <Text style={[
              styles.buttonText,
              styles.white
            ]}>Close</Text>
          </Pressable>
        </View>

      </Modal>
    </>
  );
}