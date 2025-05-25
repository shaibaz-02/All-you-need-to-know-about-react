
import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import DoubleDice from './DoubleDice'
import ColorCode from './ColorCode'
import Clicker from './Clicker'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ShoppingList from './ShoppingList'
import Clickerr from './Clickerr'
import Clickerprac from './Clickerprac';
import Counter1 from './Counter1'
import Toggler from './Toggler'
import ScoreKeeper1 from './ScoreKeeper1'
import EmojiClicker1 from './EmojiClicker1'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm'
import BettersignupForm from './BettersignupForm'
import ShoppingListForm from './ShopppingListForm'
import ShoppingList1 from './ShoppingList1'
const data=[
  {item:"eggs",quantity:12,completed:false},
  {item:"milk",quantity:1,completed:true},
  {item:"chicken breasts",quantity:4,completed:false}
]

function App() {
  return (
    <>
      <div>
        {/* <Greeter person="love babbar" from="shaibaz"/>
        <Greeter person="Lakshay" from="shaibaz"/>
        <Greeter person="striver" from="shaibaz"/> */}
        {/* <Die numSides={6}/>
        <Die numSides={26}/> */}
        {/* <Die numSides={16}/> */}
        {/* <DoubleDice/>
        <DoubleDice/>
        <DoubleDice/> */}
        {/* <ColorCode colors={["red","green","orange","yellow"]}/> */}
        {/* <Clicker/> */}
        {/* <Counter/> */}
        {/* <ScoreKeeper/> */}
        {/* <EmojiClicker/> */}
        {/* <ShoppingList items={data}/> */}
        {/* <Clickerr/> */}
        {/* <Clickerprac message="HI!!!" buttonText="click me"/> */}
        {/* <Clickerprac message="stop clicking me!!" buttonText="do not click"/> */}
        {/* <Counter1/> */}
        {/* <Toggler/> */}
        {/* <ScoreKeeper1/> */}
        {/* <EmojiClicker1/> */}
        {/* <UsernameForm/> */}
        {/* <SignupForm/> */}
        {/* <BettersignupForm/> */}
        <ShoppingList1/>
        {/* <ShoppingListForm/> */}

      </div>
    </>
  )
}

export default App
