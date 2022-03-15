const activityTrackingRepository = require("../Repositories/ActivityTrackingRepository");

const addActivityTracking = async (tracking) => {
  return await activityTrackingRepository.addActivityTracking(tracking);
};
const updateActivityTracking = async (tracking, id) => {
  return await activityTrackingRepository.updateActivityTracking(tracking, id);
};

const addActivityTrackingDetail = async (trackingDetail, trackingId) => {
  return await activityTrackingRepository.addActivityTrackingDetail(
    trackingDetail,
    trackingId
  );
};

const updateActivityTrackingDetail = async (
  trackingDetail,
  trackingId,
  trackingDetailId
) => {
  return await activityTrackingRepository.updateActivityTrackingDetail(
    trackingDetail,
    trackingId,
    trackingDetailId
  );
};

const getActivityTracking = async () => {
  return await activityTrackingRepository.getActivityTracking();
};

const getActivityTrackingById = async (trackingId) => {
  return await activityTrackingRepository.getActivityTrackingById(trackingId);
};

const getActivityTrackingDetailByTrackingId = async (trackingId) => {
  return await activityTrackingRepository.getActivityTrackingDetailByTrackingId(
    trackingId
  );
};

module.exports = {
  addActivityTracking,
  updateActivityTracking,
  addActivityTrackingDetail,
  updateActivityTrackingDetail,
  getActivityTracking,
  getActivityTrackingById,
  getActivityTrackingDetailByTrackingId,
};
