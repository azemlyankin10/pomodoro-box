export function sendNotification(title: string, options: object) {
  if (!('Notification' in window)) {
    alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.')
  }
  
  // Проверим, есть ли права на отправку уведомлений
  else if (Notification.permission === 'granted') {
    // Если права есть, отправим уведомление
    new Notification(title, options)
  }
  
  // Если прав нет, пытаемся их получить
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
    // Если права успешно получены, отправляем уведомление
    if (permission === 'granted') {
      new Notification(title, options)
    
    } else {
      alert('Вы запретили показывать уведомления') 
    }
    })
  }
}