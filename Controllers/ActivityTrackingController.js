const activityTrackingService = require("../Services/ActivityTrackingService");

const addActivityTracking = async (req, res) => {
  let data = await activityTrackingService.addActivityTracking(req.body);

  res.json({
    success: true,
    data,
  });
};

const updateActivityTracking = async (req, res) => {
  let { id } = req.params;
  let data = await activityTrackingService.updateActivityTracking(req.body, id);

  res.json({
    success: true,
    data,
  });
};

const addActivityTrackingDetail = async (req, res) => {
  let { id } = req.params;
  let detail = req.body;
  let data = await activityTrackingService.addActivityTrackingDetail(
    detail,
    id
  );

  res.json({
    success: true,
    data,
  });
};

const updateActivityTrackingDetail = async (req, res) => {
  let { id, detailid } = req.params;
  let detail = req.body;
  let data = await activityTrackingService.updateActivityTrackingDetail(
    detail,
    id,
    detailid
  );

  res.json({
    success: true,
    data,
  });
};

const getActivityTracking = async (req, res) => {
  let data = await activityTrackingService.getActivityTracking();

  res.json({
    success: true,
    data,
  });
};

const getActivityTrackingById = async (req, res) => {
  let { id } = req.params;

  let data = await activityTrackingService.getActivityTrackingById(id);

  res.json({
    success: true,
    data,
  });
};

const getActivityTrackingDetailByTrackingId = async (req, res) => {
  let { id } = req.params;

  let data =
    await activityTrackingService.getActivityTrackingDetailByTrackingId(id);

  res.json({
    success: true,
    data,
  });
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
