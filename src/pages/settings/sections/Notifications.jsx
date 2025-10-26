import { notificationsFields } from "../constants"
import Card from "../components/Card"

function Notifications () {
  return (
    <>
      {notificationsFields.map((setting) => (
        <Card title={setting.title} field={setting.field} value={setting.value} />
      ))}
    </>
  )
}

export default Notifications