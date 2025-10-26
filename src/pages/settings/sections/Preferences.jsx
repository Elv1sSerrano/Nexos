import { preferencesFields } from "../constants"
import Card from "../components/Card"

function Preferences () {
  return (
    <>
      {preferencesFields.map((setting) => (
        <Card title={setting.title} field={setting.field} value={setting.value} />
      ))}
    </>
  )
}

export default Preferences