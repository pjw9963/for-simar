import { useHistory } from "react-router"

function GoHomeRedirect() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <img id="instachanLogo" 
        src="/images/ic.png" 
        alt="Go Home">
    </img>
  )
}