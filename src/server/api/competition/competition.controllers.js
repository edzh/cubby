import { Competition } from './competition.model';

export const getOne = async (req, res) => {
  try {
    const competition = await Competition.findOne({ _id: req.params.id })
      .lean()
      .exec();

    if (!competition) {
      return res.status(400).end();
    }

    res.status(200).json({ data: competition });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = async (req, res) => {
  try {
    const competitions = await Competition.find({})
      .lean()
      .exec();

    res.status(200).json({ data: competitions });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = async (req, res) => {
  const createdBy = '5c5b3362b2fa045989440f73';
  try {
    const competition = await Competition.create({ ...req.body, createdBy });
    res.status(201).json({ data: competition });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
