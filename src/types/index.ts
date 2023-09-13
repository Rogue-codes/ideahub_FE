export type campaign = {
  campaign_name: string;
  start_date: string;
  end_date: string;
};

export type UserType = {
  first_name: string;
  last_name: string;
  email: string;
  _id: string;
};

export type HubType = {
  owner_meta: {
    id: string;
    owner_name: string;
    owner_email: string;
  };
  _id: string;
  name: string;
  owner: string;
  members: {
    name: string;
    email: string;
    role: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

export type CampaignType = {
  idea_hub_meta: {
    id: string;
    idea_hub_name: string;
    idea_hub_owner: string;
  };
  campaign_owner_meta: {
    id: string;
    owner_name: string;
    owner_email: string;
    _id: string;
  };
  campaign_name: string;
  idea_hub: string;
  campaign_owner: string;
  campaign_description: string;
  start_date: string;
  end_date: string;
  _id:string;
};
