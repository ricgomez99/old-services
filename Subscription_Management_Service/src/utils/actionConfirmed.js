export default function actionConfirmed(action) {
  return action === 'activate'
    ? 'subscription has been activated successfully'
    : 'subscription has been cancelled successfully'
}
