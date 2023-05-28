import React, { useEffect } from 'react';
// import Modal from '../Modal/Modal';

function NotificationPrompt() {
	// const [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		handleNotificationPermission();
	}, []);

	const handleNotificationPermission = async () => {
		try {
			const permissionResult = await Notification.requestPermission();
			console.log('Notification permission:', permissionResult);
			// Handle the permission result accordingly
		} catch (error) {
			console.error('Error requesting notification permission:', error);
		}
	};

	return <p onClick={handleNotificationPermission}>Notification seen</p>;
}

export default NotificationPrompt;
