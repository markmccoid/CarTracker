import moment from 'moment';

//==Get Visible services
export default (services, { text, sortBy, startDate, endDate }) => {
  return services.filter((service) => {
    const createdAtMoment = moment(service.createdAt);

    const textMatch = service.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    //const startDateMatch = typeof startDate !== 'number' || service.createdAt >= startDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    //only return true (i.e. include in output) if all match criteria are met
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.amount < b.amount ? 1 : -1;
  });
};
