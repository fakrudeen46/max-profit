function calculateMaxProfit(n) {
    let maxProfit = 0;
    let bestMix = [];

    for (let t = 0; t <= Math.floor(n / 5); t++) {
        for (let p = 0; p <= Math.floor(n / 4); p++) {
            for (let c = 0; c <= Math.floor(n / 10); c++) {

                const totalBuildTime = (5 * t) + (4 * p) + (10 * c);
                if (totalBuildTime > n) continue;

                let currentTime = 0;
                let profit = 0;

                // Theatres
                for (let i = 0; i < t; i++) {
                    currentTime += 5;
                    profit += (n - currentTime) * 1500;
                }

                // Pubs
                for (let i = 0; i < p; i++) {
                    currentTime += 4;
                    profit += (n - currentTime) * 1000;
                }

                // Commercial Parks
                for (let i = 0; i < c; i++) {
                    currentTime += 10;
                    profit += (n - currentTime) * 2000;
                }

                if (profit > maxProfit) {
                    maxProfit = profit;
                    bestMix = [{ T: t, P: p, C: c }];
                } 
                else if (profit === maxProfit && profit !== 0) {
                    bestMix.push({ T: t, P: p, C: c });
                }
            }
        }
    }

    return { maxProfit, bestMix };
}

//usage
const inputTime = 13;
const result = calculateMaxProfit(inputTime);
console.log("Time Unit:", inputTime);
console.log("Earnings: $" + result.maxProfit);
console.log("Solutions:");
result.bestMix.sort((a, b) => b.T - a.T); // reodered as per document's output
result.bestMix.forEach(mix => {
    console.log(`T:${mix.T} P:${mix.P} C:${mix.C}`);
});
