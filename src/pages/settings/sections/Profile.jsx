import { profileFields } from "../constants"
import Card from "../components/Card"

function Profile () {
  return (
    <>
      {profileFields.map((setting) => (
        <Card title={setting.title} field={setting.field} value={setting.value} />
      ))}
    </>
  )
}

export default Profile