function generate(selectedYear, selectedMonth, options)
{
    var year        = [],
        month       = [],
        day         = [],
        d           = new Date(),
        cYear       = d.getFullYear(),
        cMonth      = d.getMonth() + 1,
        cDay        = d.getDate(),
        leadingZero = options !== undefined && options.leadingZero !== undefined ? options.leadingZero : false,
        toFuture    = options !== undefined && options.toFuture    !== undefined ? options.toFuture    : false,
        offset      = options !== undefined && options.offset      !== undefined ? options.offset      : 101

    /**
     * Year
     */

    if(toFuture)
    {
        var maxYear = cYear + offset
        for(var y = cYear; y < maxYear; y++)
            year.push(y)
    }
    else
    {
        var minYear = cYear - offset
        for(var y = cYear; y > minYear; y--)
            year.push(y)
    }

    /**
     * Month
     */

    for(var m = 1; m <= 12; m++)
        if(leadingZero && m < 10)
            month.push("0" + m)
        else
            month.push(m)

    /**
     * Day
     */

    var totalDay = 31

    if(selectedMonth !== undefined && selectedMonth !== false)
    {
        var isLeapYear = ((selectedYear % 4 == 0) && (selectedYear % 100 != 0)) || (selectedYear % 400 == 0),
            dayMap     = [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            totalDay   = dayMap[selectedMonth - 1]
    }

    for(var d = 1; d <= totalDay; d++)
        if(leadingZero && d < 10)
            day.push("0" + d)
        else
            day.push(d)

    /**
     * Return
     */

    return {
        year,
        month,
        day
    }
}
