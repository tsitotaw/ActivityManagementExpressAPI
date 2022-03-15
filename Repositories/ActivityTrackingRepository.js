const ActivityTraking = require("../Models/ActivityTracking");

const getActivityTracking = async () => {
  return await ActivityTraking.find();
};

const getActivityTrackingById = async (trackingId) => {
  return await ActivityTraking.find({ _id: trackingId });
};

const getActivityTrackingDetailByTrackingId = async (trackingId) => {
  return await ActivityTraking.find(
    {
      _id: trackingId,
    },
    {
      _id: 0,
      details: 1,
    }
  );
};

const addActivityTracking = async (tracking) => {
  return await ActivityTraking.create(tracking);
};

const updateActivityTracking = async (tracking, id) => {
  return await ActivityTraking.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        title: tracking.title,
      },
    }
  );
};

const addActivityTrackingDetail = async (trackingDetail, trackingId) => {
  return await ActivityTraking.updateOne(
    {
      _id: trackingId,
    },
    {
      $push: {
        details: trackingDetail,
      },
    }
  );
};

const updateActivityTrackingDetail = async (
  trackingDetail,
  trackingId,
  detailId
) => {
  return await ActivityTraking.updateOne(
    {
      _id: trackingId,
    },
    {
      $set: {
        "details.$[d].quantity": trackingDetail.quantity,
        "details.$[d].trackingDate": trackingDetail.trackingDate,
        "details.$[d].beneficiary": trackingDetail.beneficiary,
      },
    },
    {
      arrayFilters: [
        {
          "d._id": detailId,
        },
      ],
    }
  );
};

module.exports = {
  getActivityTracking,
  getActivityTrackingById,
  getActivityTrackingDetailByTrackingId,
  addActivityTracking,
  updateActivityTracking,
  addActivityTrackingDetail,
  updateActivityTrackingDetail,
};
