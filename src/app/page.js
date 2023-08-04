import Image from 'next/image'
import styles from './page.module.css'
import RegistrationForm from './components/RegistrationForm'

export default function Home() {
  return (
    <main className={styles.main}>
       <h1>Registration Form</h1>
      <RegistrationForm />
    </main>
  )
}
