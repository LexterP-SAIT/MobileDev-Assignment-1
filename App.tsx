import { View, Text, Image, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  function alertPress() {
    Alert.alert('Alert: Button Pressed!');
  };
  
  return (
    <SafeAreaView style={styles.mainContent}>
      
      <SafeAreaView style={styles.topBar}>
        <SafeAreaView style={styles.topBar}>
          <Image source={require('./assets/AddFollower.png')} style={styles.icon}/>
        </SafeAreaView>
        <SafeAreaView style={styles.topRight}>
          <Image source={require('./assets/ProfileViews.png')} style={styles.icon}/>
          <Image source={require('./assets/Share.png')} style={styles.icon}/>
          <Image source={require('./assets/RightBurgerBar.png')} style={styles.icon}/>
        </SafeAreaView>
      </SafeAreaView>

      <View style={styles.profileSection}>
        <View style={styles.note}>
          <Text style={styles.noteText}>What's good?</Text>
        </View>
        
        <View style={styles.profileIcon}>
          <Image source={require('./assets/ProfilePicture.gif')} style={styles.profileImage}/>
          <Image source={require('./assets/AddStory.png')} style={styles.addStory}/>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.bigName}>Eldwyr</Text>
          <Image source={require('./assets/DownArrow.png')} style={styles.smallIcon}/>
          <View style={styles.editArrow}>
            <Text style={styles.white}>Edit</Text>
          </View>
        </View>

        <Text style={styles.greyText}>@eldwyr</Text>
      </View>

      
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.greyText}>Following</Text>
        </View>
        <Text style={styles.statSeparator}>|</Text>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.greyText}>Follower</Text>
        </View>
        <Text style={styles.statSeparator}>|</Text>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.greyText}>Likes</Text>
        </View>
      </View>

      
      <View style={styles.bioBox}>
        <Text style={styles.white}>🫡 owseben</Text>
        <View style={styles.studioRow}>
          <Image source={require('./assets/UserStar.png')} style={styles.smallIcon}/>
          <Text style={styles.white}>TikTok Studio</Text>
        </View>
      </View>

      
      <View style={styles.tabsRow}>
        <View style={styles.tabItem}>
          <Image source={require('./assets/RightBurgerBar.png')} style={styles.icon}/>
        </View>
        <View style={styles.tabItem}>
          <Image source={require('./assets/Lock.png')} style={styles.icon}/>
        </View>
        <View style={styles.tabItem}>
          <Image source={require('./assets/Repost.png')} style={styles.icon}/>
        </View>
        <View style={styles.tabItem}>
          <Image source={require('./assets/Heart.png')} style={styles.icon}/>
        </View>
      </View>

      
      <View style={styles.videoGrid}>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
        <View style={styles.videoFeed}>
          <Image source={require('./assets/VideoPlaceHolder.png')} style={styles.videoThumbnail}/>
        </View>
      </View>

      
      <View style={styles.bottomNavbar}>
        <View style={styles.bottomIcon}>
          <Image source={require('./assets/Home.png')} style={styles.icon}/>
          <Text style={styles.greyText}>Home</Text>
        </View>
        
        <View style={styles.bottomIcon}>
          <Image source={require('./assets/Friends.png')} style={styles.icon}/>
          <Text style={styles.greyText}>Friends</Text>
        </View>

        <TouchableOpacity style={styles.bottomIcon} onPress={alertPress}>
        <Image source={require('./assets/Alert.png')} style={styles.icon}/>
        <Text style={styles.white}>Alert</Text>
        </TouchableOpacity>

        <View style={styles.bottomIcon}>
          <Image source={require('./assets/Inbox.png')} style={styles.icon}/>
          <Text style={styles.greyText}>Inbox</Text>
        </View>
        
        <View style={styles.bottomIcon}>
          <Image source={require('./assets/Profile.png')} style={styles.icon}/>
          <Text style={styles.white}>Profile</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  topRight: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    tintColor: '#FFFFFF',
  },
  profileSection: {
    alignItems: 'center',
  },
  note: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius:25,
    marginBottom: 5,
  },
  noteText:{
    color: '#b4b0b0',
    fontSize: 12
  },
  profileIcon: {
    width: 100,
    height: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addStory: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  nameRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  bigName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  smallIcon: {
    width: 15,
    height: 15,
    tintColor: '#FFFFFF',
    marginRight: 10,
  },
  editArrow: {
    backgroundColor: '#333333',
    padding: 8,
    borderRadius: 25,
  },
  white: {
    color: '#FFFFFF',
  },
  greyText: {
    color: '#888888',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statSeparator: {
    color: '#333333',
    fontSize: 20,
  },
  bioBox: {
    alignItems: 'center',
    marginTop: 15,
  },
  studioRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333333',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  videoGrid: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  videoFeed: {
    width: '33.3%',
    height: 150,
    borderWidth: 1,
    borderColor: '#000000',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    backgroundColor: '#222222',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderColor: '#333333',
  },
  bottomIcon: {
    alignItems: 'center',
  }
});