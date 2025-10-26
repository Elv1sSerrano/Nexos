import { securityFields } from "../constants"
import Card from "../components/Card"

function Security () {
  return (
    <>
      {securityFields.map((setting) => (
        <Card title={setting.title} field={setting.field} value={setting.value} />
      ))}
    </>
  )
}

export default Security