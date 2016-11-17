function generate(selectedYear, selectedMonth, options)
{
    var years       = [],
        months      = [],
        days        = [],
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
            years.push(y)
    }
    else
    {
        var minYear = cYear - offset
        for(var y = cYear; y > minYear; y--)
            years.push(y)
    }

    /**
     * Month
     */

    for(var m = 1; m <= 12; m++)
        if(leadingZero && m < 10)
            months.push("0" + m)
        else
            months.push(m)

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
            days.push("0" + d)
        else
            days.push(d)

    /**
     * Return
     */

    return {
        years,
        months,
        days
    }
}
