// import React, { useState, useEffect } from 'react';

// function useFriendStatus(frinedID) {
//     const [isOnline, setIsOnline] = useState(null);

//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//         ChatAPI.subscribeToFriendStatus(frinedID, handleStatusChange);

//         //清除effect作用
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(frinedID, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }

// function FriendListItem(props) {
//     const isOnline = useFriendStatus(props.friend.id);

//     return (
//         <li style={{ color: isOnline ? 'green' : 'black' }}>
//             {props.friend.name}
//         </li>
//     )
// }

// const firendList = [
//     { id: 1, name: 'Phoebe' },
//     { id: 2, name: 'Rachel' },
//     { id: 3, name: 'Ross' },
// ];

// function ChatRecipientPicker() {
//     const [recipientID, setRecipientID] = useState(1);
//     const isRecipientOnline = useFriendStatus(recipientID);

//     return (
//         <div>
//             <select
//                 value={recipientID}
//                 onChange={e => setRecipientID(Number(e.target.value))}
//             >
//                 {firendList.map(friend => (
//                     <option value={friend.id} key={friend.id}></option>
//                 ))}
//             </select>
//         </div>
//     )
// }

// export default ChatRecipientPicker