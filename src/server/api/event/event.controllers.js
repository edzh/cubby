import { Event } from './event.model';

export const getMany = async (req, res) => {
  try {
    const events = await Event.find({})
      .lean()
      .exec();

    res.status(200).json({ data: events });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body });
    res.status(201).json({ data: event });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
