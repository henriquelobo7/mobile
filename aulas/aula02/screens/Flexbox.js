import { View } from "react-native"

function Flexbox() {
  return (
    <View style = {{ 
      flex: 1, 
      flexDirection: "row", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "blanchedalmond" 
      }}>
      <View style = {{ 
        height: 50, 
        width: 50,
        borderRadius: 50, 
        backgroundColor: "blue"
        }}> 
        
      </View>
      <View style = {{ 
        height: 50, 
        width: 50,
        borderRadius: 50, 
        backgroundColor: "blue"
        }}> 
        
      </View>
      <View style = {{ 
        height: 50, 
        width: 50,
        borderRadius: 50, 
        backgroundColor: "blue"
        }}> 
        
      </View>
    </View>
  )
  
}

export default Flexbox